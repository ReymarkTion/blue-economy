<?php

namespace Tests\Feature;

use App\Models\Blog;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogTest extends TestCase
{
    use RefreshDatabase;

    public function testGuestCanGetBlog()
    {
        $blog = Blog::factory()->create();

        $response = $this->get('/api/blog/' . $blog->link . '/link');

        $this->assertEquals($blog['title'], $response['blog']['title']);
        $this->assertEquals($blog['body'], $response['blog']['body']);
    }

    public function testUserCannotGetBlogWithIncorrectLink()
    {
        $response = $this->get('/api/blog/' . 'this-is-an-incorrect-link' . '/link');

        $response->assertStatus(404)
            ->assertJsonFragment([
                'status' => 'failed',
                'message' => 'Blog not found!'
            ]);
    }
}

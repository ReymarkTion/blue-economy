<?php

namespace Tests\Unit;

use App\Factories\BlogFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogFactoryTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function itCanCreateBlog()
    {
        $factory = app()->make(BlogFactory::class);
        $dateNow = date('Y-m-d H:i:s');

        $blog = $factory->create([
            'title' => 'Blog Title',
            'cover_photo' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAUBAMAAAA95HOpAAAAIVBMVEXu7u6Wlpbj4+O3t7fCwsKhoaHY2NjNzc2srKyxsbGmpqaK+o79AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAASUlEQVQokWNgGAUQoCysACQZsUkJADELdhlXFzdlRoZmZzcXlxBUGYf0IqAeF84SJxc2VJnkFDdmoAyXi7ObGQ7HlCiQ6HpKAQDj5gjZes7jeAAAAABJRU5ErkJggg==',
            'date_posted' => $dateNow,
            'body' => '<p>This is the blog content</p>'
        ]);

        $this->assertDatabaseHas('blog', [
            'title' => 'Blog Title',
            'date_posted' => $dateNow,
            'body' => '<p>This is the blog content</p>'
        ]);
        $this->assertStringContainsString('-blog_cover.png', $blog['cover_photo'], 'Cover photo filename suffix must be \'-blog_cover.png\'!');
    }
}

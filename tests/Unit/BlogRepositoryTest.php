<?php

namespace Tests\Unit;

use App\Models\Blog;
use App\Repositories\BlogRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogRepositoryTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function itCanGetBlog()
    {
        $blog = Blog::factory()->create();

        $repository = app()->make(BlogRepository::class);
        $getBlog = $repository->get($blog->id);

        $this->assertEquals($blog->title, $getBlog->title);
    }

    /** @test */
    public function itCanUpdateBlog()
    {
        $blog = Blog::factory()->create();

        $repository = app()->make(BlogRepository::class);
        $updateBlog = $repository->update($blog->id, [
            'title' => 'This is an updated title',
            'body' => '<p>This is an updated content</p>',
            'status' => 0
        ]);

        $this->assertDatabaseHas('blog', [
            'title' => $updateBlog->title,
            'body' => $updateBlog->body,
            'status' => 0
        ]);
    }

    /** @test */
    public function itCanDeleteBlog()
    {
        $blog  = Blog::factory()->create();

        $repository = app()->make(BlogRepository::class);
        $deleteBlog = $repository->delete($blog->id);

        $this->assertDatabaseMissing('blog', [
            'id' => $blog->id
        ]);
        $this->assertNull($deleteBlog);
    }

    /** @test */
    public function itCanPaginateBlog()
    {
        $offset = 0;
        $limit = 3;
        $increment = 3;
        $repository = app()->make(BlogRepository::class);

        Blog::factory()->count(8)->create();

        $getOffset1 = $repository->getFromTo($offset, $limit);
        $offset += $increment;
        $getOffset2 = $repository->getFromTo($offset, $limit);
        $offset += $increment;
        $getOffset3 = $repository->getFromTo($offset, $limit);
        $offset += $increment;
        $getOffset4 = $repository->getFromTo($offset, $limit);

        $this->assertCount(3, $getOffset1);
        $this->assertCount(3, $getOffset2);
        $this->assertCount(2, $getOffset3);
        $this->assertCount(0, $getOffset4);
    }

    /** @test */
    public function itCanGetBlogWithLink()
    {
        $repository = app()->make(BlogRepository::class);
        $blog = Blog::factory()->create();

        $getBlog = $repository->getBlogWithLink($blog->link);

        $this->assertEquals($blog->title, $getBlog->title);
        $this->assertEquals($blog->body, $getBlog->body);
    }
}

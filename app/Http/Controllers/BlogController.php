<?php

namespace App\Http\Controllers;

use App\Factories\BlogFactory;
use App\Http\Requests\BlogRequest;
use App\Repositories\BlogRepository;
use App\Traits\BlogTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    use BlogTrait;

    public function store(BlogRequest $request, BlogFactory $factory)
    {
        $blog = $factory->create($request->validated());

        if ($blog) {
            return response()->json([
                'result' => 'success',
                'message' => 'Blog successfully saved!',
                'blog' => $blog,
            ], 200);
        } else {
            return response()->json([
                'result' => 'success',
                'message' => 'Unable to save!',
                'blog' => $blog,
            ], 422);
        }
    }

    public function update($id, BlogRequest $request, BlogRepository $repository)
    {
        $blog = $repository->get($id);
        $requestData = $request->validated();
        $updateResult = false;

        if (array_key_exists('cover_photo', $requestData)) {
            $updateResult = $this->updateCoverPhoto(
                $blog['cover_photo'],
                $requestData['cover_photo']
            );
        }

        if (!$updateResult && array_key_exists('cover-photo', $requestData)) {
            return response()->json([
                'result' => 'failed',
                'message' => 'Unable to update image!'
            ], 422);
        }

        if ($updateResult) {
            $requestData['cover_photo'] = $blog['cover_photo'];
        }

        $updateBlog = $repository->update($blog->id, $requestData);

        return response()->json([
            'result' => 'success',
            'message' => 'Blog content successfully updated!',
            'blog' => $updateBlog
        ], 200);
    }

    public function index(BlogRepository $repository)
    {
        $filePath = config('app.aws_blog_folder') . '/';
        $blogs = $repository->all();
        $blogsNewArr = [];

        foreach ($blogs as $blog) {
            $filename = $blog['cover_photo'];
            // $imageUrl = Storage::disk('s3')->temporaryUrl($filePath . $filename, Carbon::now()->addHours(2));
            $imageUrl = "https://images.pexels.com/photos/20392251/pexels-photo-20392251/free-photo-of-a-brown-butterfly-sitting-on-a-leaf-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

            $blog['cover_photo'] = $imageUrl;

            array_push($blogsNewArr, $blog);
        }

        return response()->json([
            'result' => 'success',
            'message' => 'List of all blogs!',
            'blogs' => $blogsNewArr
        ], 200);
    }

    public function show($id, BlogRepository $repository)
    {
        $filePath = config('app.aws_blog_folder') . '/';
        $blog = $repository->get($id);

        $filename = $blog['cover_photo'];
        // $imageUrl = Storage::disk('s3')->temporaryUrl($filePath . $filename, Carbon::now()->addHours(2));
        $imageUrl = "https://images.pexels.com/photos/20392251/pexels-photo-20392251/free-photo-of-a-brown-butterfly-sitting-on-a-leaf-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

        $blog['cover_photo'] = $imageUrl;

        return response()->json([
            'result' => 'success',
            'message' => 'Ok',
            'blog' => $blog
        ], 200);
    }

    public function destroy($id, BlogRepository $repository)
    {
        $blog = $repository->get($id);
        $coverFileName = $blog->cover_photo;
        $filePath = config('app.aws_blog_folder') . '/';

        Storage::disk('s3')->delete($filePath . $coverFileName);

        $repository->delete($id);

        return response()->json([
            'result' => 'success',
            'message' => 'Blog successfully deleted!'
        ], 200);
    }

    public function getOffset($offset, BlogRepository $repository)
    {
        $limit = config('app.pagination_limit');
        $filePath = config('app.aws_blog_folder') . '/';
        $blogs = $repository->getFromTo($offset, $limit);
        $blogList = [];

        foreach ($blogs as $blog) {
            $filename = $blog['cover_photo'];
            // $imageUrl = Storage::disk('s3')->temporaryUrl($filePath . $filename, Carbon::now()->addHours(2));
            $imageUrl = "https://images.pexels.com/photos/20392251/pexels-photo-20392251/free-photo-of-a-brown-butterfly-sitting-on-a-leaf-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            $blog['cover_photo'] = $imageUrl;

            array_push($blogList, $blog);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Ok',
            'blogs' => $blogList
        ], 200);
    }

    public function getBlog($link, BlogRepository $repository)
    {
        $limit = config('app.pagination_limit');
        $filePath = config('app.aws_blog_folder') . '/';

        $blog = $repository->getBlogWithLink($link);

        if (!$blog) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Blog not found!',
                'blog' => null
            ], 404);
        }

        $filename = $blog['cover_photo'];

        $imageUrl = "https://images.pexels.com/photos/20392251/pexels-photo-20392251/free-photo-of-a-brown-butterfly-sitting-on-a-leaf-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        // Storage::disk('s3')->temporaryUrl($filePath . $filename, Carbon::now()->addHours(2));

        $blog['cover_photo'] = $imageUrl;

        return response()->json([
            'status' => 'success',
            'message' => 'Ok',
            'blog' => $blog
        ], 200);
    }
}

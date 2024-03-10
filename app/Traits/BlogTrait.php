<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;

trait BlogTrait
{
    public function uploadCoverPhoto($image)
    {
        list($date, $time) = explode(' ', now()->toDateTimeString());

        $filename = $date . '-' . $time . '-blog_cover.png';
        
        if ($this->upload($filename, $image)) {
            return $filename;
        } else {
            return false;
        }
    }

    public function updateCoverPhoto($filename, $image)
    {
        if ($this->upload($filename, $image)) {
            return true;
        } else {
            return false;
        }
    }

    protected function upload($filename, $image)
    {
        list($type,) = explode(';', $image);

        $filePath = config('app.aws_blog_folder') . '/';
        $types = ['jpg', 'jpeg', 'png'];

        if (stripos(json_encode($types), $type) !== false) {
            return false;
        }

        if (preg_match('/^data:image\/(\w+);base64,/', $image)) {
            $postImage = $image;
            $image = substr($postImage, strpos($postImage, ',') + 1);

            Storage::disk('s3')->put($filePath . $filename, base64_decode($image));
        }

        return true;
    }
}
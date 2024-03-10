<?php

namespace App\Factories;

use App\Traits\BlogTrait;
use Illuminate\Support\Str;

class BlogFactory extends Factory
{
    use BlogTrait;

    public function create($attributes)
    {
        $filename = $this->uploadCoverPhoto($attributes['cover_photo']);

        if (!$filename) {
            return null;
        }

        $attributes['cover_photo'] = $filename;

        $title = $attributes['title'];

        $replacedTitle = Str::of($title)->replace(' ', '-');
        $replacedTitle = Str::of($replacedTitle)->replace('.', '_');

        $attributes['link'] = Str::lower($replacedTitle);

        return parent::create($attributes);
    }
}

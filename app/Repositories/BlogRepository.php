<?php

namespace App\Repositories;

use Illuminate\Support\Str;

class BlogRepository extends Repository
{
    public function update($id, $attributes)
    {
        $title = $attributes['title'];

        $replacedTitle = Str::of($title)->replace(' ', '-');
        $replacedTitle = Str::of($replacedTitle)->replace('.', '_');

        $attributes['link'] = Str::lower($replacedTitle);

        return parent::update($id, $attributes);
    }

    public function getFromTo($offset, $limit)
    {
        $builder = $this->builder;
        $model = $builder
                    ->where('status', 1)
                    ->orderBy('date_posted', 'desc')
                    ->offset($offset)
                    ->limit($limit)
                    ->get();
        $this->clean();

        return $model;
    }

    public function getBlogWithLink($link)
    {
        $builder = $this->builder;
        $model = $builder
                    ->where('status', 1)
                    ->where('link', $link)
                    ->get()
                    ->first();
        $this->clean();

        return $model;
    }
}
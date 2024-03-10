<?php

namespace Database\Factories;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->text(200);

        $replacedTitle = Str::of($title)->replace(' ', '-');
        $replacedTitle = Str::of($replacedTitle)->replace('.', '_');

        return [
            'title' => $title,
            'cover_photo' => $this->faker->imageUrl,
            'date_posted' => $this->faker->date,
            'body' => $this->faker->randomHtml,
            'status' => 1,
            'link' => Str::lower($replacedTitle)
        ];
    }
}

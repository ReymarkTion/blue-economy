<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $title = $faker->text(200);

        $replacedTitle = Str::of($title)->replace(' ', '-');
        $replacedTitle = Str::of($replacedTitle)->replace('.', '_');

        Blog::create([
            'title' => $title,
            'cover_photo' => $faker->imageUrl,
            'date_posted' => $faker->date,
            'body' => $faker->randomHtml,
            'status' => 1,
            'link' => Str::lower($replacedTitle)
        ]);
    }
}

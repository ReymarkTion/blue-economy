<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'POST':
                return [
                    'title' => 'required|string|unique:blog|max:255',
                    'cover_photo' => 'required|string',
                    'date_posted' => 'required|date',
                    'body' => 'required|string',
                    'status' => 'nullable',
                    'link' => 'nullable'
                ];
            case 'PUT':
                return [
                    'title' => 'required|string|max:255',
                    'cover_photo' => 'nullable',
                    'date_posted' => 'required|date',
                    'body' => 'required|string',
                    'status' => 'nullable',
                    'link' => 'nullable'
                ];
        }
    }
}

<?php

namespace Admin\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;

class ProductRequest extends FormRequest
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
      if ($this->isMethod('get')) {
         return [];
      } else if($this->isMethod('delete')) {
         return [];
      }
      return [
         'title' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
               'string',
               'max:200',
            ]),
         ],
         'price' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
               'numeric',
            ]),
         ],
         'stock' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
               'numeric',
            ]),
         ],
         'qty' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
               'numeric',
            ]),
         ],
         'code' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
            ]),
         ],
      ];
   }

   public function prepareForValidation()
   {
      $this->merge([
         'created_by_user_id' => $this->user()->id,
      ]);
      if ($this->title && !$this->product) {
         $code = Str::slug($this->title);
         $this->merge([
            'code' => $code,
         ]);
      }
   }
}

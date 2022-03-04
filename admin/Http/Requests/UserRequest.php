<?php

namespace Admin\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
      return [
         'name' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
               'string',
               'max:200',
            ]),
         ],
         'email' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
               Rule::unique('users')
            ], [
               'required',
               'string',
               'max:200',
               Rule::unique('users')->ignore($this->user)
            ]),
            'email:dns,rfc',
         ],
         'phone_number' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
               Rule::unique('users')
            ], [
               'required',
               'digits:10',
               Rule::unique('users')->ignore($this->user)
            ]),
         ],
         'password' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
               'string',
               'min:6',
            ]),
         ],
      ];
   }

   public function prepareForValidation()
   {
      if (!$this->isMethod('patch') && $this->password) {
         $this->merge([
            'password' => bcrypt($this->password),
         ]);
      }
   }
}

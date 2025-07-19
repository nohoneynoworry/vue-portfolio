<template>
  <div class="max-w-xs mx-auto my-5 p-6 border border-blue-500 rounded-2xl shadow-lg shadow-blue-500/100">
    <h2 class="text-2xl text-blue-500 font-semibold mb-6 text-center">{{ $t('contact') }}</h2>
    <Form :validation-schema="validationSchema" @submit="handleSubmit" class="space-y-2">
      <!-- Name Field -->
      <div>
        <label class="block text-blue-500 mb-1 text-sm font-medium">{{ $t('name') }}</label>
        <Field name="name" type="text" v-model="form.name"
          class="w-full px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          :placeholder="$t('namePlaceholder')" />
        <ErrorMessage name="name" class="text-red-500 text-sm mt-1" />
      </div>
      <!-- Email Field -->
      <div>
        <label class="block text-blue-500 mb-1 text-sm font-medium">{{ $t('email') }}</label>
        <Field name="email" type="email" v-model="form.email"
          class="w-full px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          :placeholder="$t('emailPlaceholder')" />
        <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
      </div>
      <!-- Message Field -->
      <div>
        <label class="block text-blue-500 mb-1 text-sm font-medium">{{ $t('message') }}</label>
        <Field as="textarea" name="message" rows="3" v-model="form.message"
          class="w-full px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required :placeholder="$t('msgPlaceholder')" />
        <ErrorMessage name="message" class="text-red-500 text-sm mt-1" />
      </div>
      <!-- Send Button -->
      <button type="submit"
        class="w-full py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 hover: cursor-pointer">
        {{ $t('send') }}
      </button>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'ContactForm',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      validationSchema: yup.object(
        {
          name: yup.string().matches(/^[A-Za-z\s]+$/,
            'Only alphabet and space is accepted'
          )
            .min(3, 'Name must be at least 3 characters')
            .required('Name is required'),
          email: yup.string().email('Invalid email').required('Email is required'),
          message: yup.string().min(5, 'Message must be from 5 to 100 characters').max(100, 'Message must be from 5 to 100 characters').required('Message is required')
        })
    }
  },
  methods: {
    handleSubmit() {
      if (this.form.name != '' && this.form.email != '' && this.form.message != '') {
        alert('Contact information submitted successfully!');
        this.form = {
          name: '',
          email: '',
          message: ''
        };
      } else (alert('Error!'));
    }
  }
}
</script>

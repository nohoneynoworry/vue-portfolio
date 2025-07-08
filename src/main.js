import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'khm',
  messages: {
    en: {
      about: 'About Me',
      contact: 'Contact Form',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      socialLink: 'Social Link',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email address',
      msgPlaceholder: 'Write your message here ',
      send: 'Send',
      projects: 'List of Projects',
      homepage: 'Home Page',
      welcome:
        'My name is Sim Kantheng. I am very happy to have attended the web development training course at the Digital Governance Institute. I am currently working in the administration, but I have a passion for web development, so I decided to continue my studies in this field. I will continue to try my best to use this skill to develop my abilities and my organization. I would like to thank my organization for giving me the opportunity to continue my studies in this field. I would also like to thank all the teachers who have always supported me in the past. I would also like to thank my classmates who have always helped me solve problems in my coding. Thank you!',
      hello: 'Hello, everyone!',
      my_project: 'My Projects',
      myName: 'SIM KUNTHENG',
      job: 'Job',
      jobTitle: 'Civil Servant',
      workPlace: 'Work Place',
      workPlaceName: 'MLVT',
      gender: 'Gender',
      male: 'Male',
      age: 'Age',
      ageNum: '43 years old',
      status: 'Status',
      married: 'Married',
      phone: 'Phone',
      phoneNum: '011 629 462',
    },
    khm: {
      about: 'អំពីខ្ញុំ',
      contact: 'ទំនាក់ទំនង',
      name: 'ឈ្មោះ',
      email: 'សារអេឡិចត្រូនិក',
      message: 'សារ',
      socialLink: 'បណ្តាញសង្គម',
      namePlaceholder: 'សូមបំពេញឈ្មោះ',
      emailPlaceholder: 'សូមបំពេញសារអេឡិចត្រូនិក',
      msgPlaceholder: 'បរិយាយ',
      send: 'បញ្ជូនសារ',
      projects: 'បញ្ជីគម្រោង',
      setting: 'ការកំណត់',
      homepage: 'ទំព័រដើម',
      welcome:
        'ខ្ញុំឈ្មោះ ស៊ីម គន្ថេង។ ខ្ញុំមានសេចក្តីរីករាយណាស់ដែលបានចូលរួមវគ្គបណ្តុះបណ្តាលជំនាញអភិវឌ្ឍកម្មវិធីគេហទំព័រនៅវិទ្យាស្ថានអភិបាលកិច្ចឌីជីថល។ បច្ចុប្បន្ននេះ ខ្ញុំធ្វើការផ្នែករដ្ឋបាល ប៉ុន្តែ ខ្ញុំមានចំណង់ចំណូលចិត្តខាងការងារអភិវឌ្ឍកម្មវិធីគេហទំព័រ  ដូច្នេះ ខ្ញុំបានសម្រេចចិត្តមកបន្តការសិក្សាជំនាញនេះ។ ខ្ញុំនឹងបន្តការព្យាយាមបន្ថែមទៀតដើម្បីយកជំនាញនេះទៅអភិវឌ្ឍសមត្ថភាព និងស្ថាប័នរបស់ខ្ញុំ។ ខ្ញុំសូមថ្លែងអំណរគុណដល់ស្ថាប័នរបស់ខ្ញុំ ដែលបានផ្តល់ឱកាសដល់ខ្ញុំ ដើម្បីបានបន្តការសិក្សាជំនាញនេះ។ ហើយខ្ញុំសូមអរគុណដល់លោកគ្រូទាំងអស់ ដែលតែងតែបានជួយគាំទ្រខ្ញុំកន្លងមក។ ខ្ញុំក៏សូមអរគុណដល់មិត្តរួមថ្នាក់ផងដែរ ដែលតែងតែជួយដោះស្រាយបញ្ហាក្នុងការសរសេរកូដរបស់ខ្ញុំ។ សូមអរគុណ!',
      hello: 'សួស្តី អ្នកទាំងអស់គ្នា!',
      my_project: 'គម្រោងរបស់ខ្ញុំ',
      job: 'មុខរបរ',
      jobTitle: 'មន្ត្រីរាជការស៊ីវិល',
      gender: 'ភេទ',
      myName: 'ស៊ីម គន្ថេង',
      workPlace: 'ទីកន្លែងធ្វើការ',
      workPlaceName: 'ក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ',
      male: 'ប្រុស',
      age: 'អាយុ',
      ageNum: '៤៣ ឆ្នាំ',
      status: 'ស្ថានភាពគ្រួសារ',
      married: 'រៀបការ',
      phone: 'លេខទូរសព្ទ',
      phoneNum: '០១១ ៦២៩ ៤៦២',
    },
  },
})
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')

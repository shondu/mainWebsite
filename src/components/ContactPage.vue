<template>
    <div class="contact-page">
      <h1>Contact me</h1>
      <p class="contact-header">Don Jensen</p>
      <p class="contact-header">5735 South 113th Street</p>
      <p class="contact-header">Omaha, Ne 68137</p>
      <p class="contact-header">(402) 871-5244</p>
      <div class="contact-info">
        <div>
          <label class="form-label" for="firstName">First Name:</label>
          <input class="form-input" type="text" id="firstName" v-model="firstName">
        </div>
        <div>
          <label class="form-label" for="lastName">Last Name:</label>
          <input class="form-input" type="text" id="lastName" v-model="lastName">
        </div>
        <div>
          <label class="form-label" for="company">Company:</label>
          <input class="form-input" type="text" id="company" v-model="company">
        </div>
        <br>
        <div>
          <label class="form-label" for="subject">Subject:</label>
          <input class="form-input" type="text" id="subject" v-model="subject">
        </div>
        <br>
        <div>
          <label class="form-label" for="message">Message:</label>
          <textarea class="form-input"  id="message" cols="30" rows="10" v-model="message"></textarea>
        </div>
        <div>
          <a class="email-link"
             :href="'mailto:dmj240@gmail.com?subject=' + this.subject + '&body=' + this.formatEmail()" @click="eventuallyClearForm()">
            Send Email
          </a>
<!--          <button type="button" class="form-button" @Click-="sendEmail">Send</button>-->
          <button type="button" class="form-button" @click="clearForm">Reset</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactPage',
      data () {
          return {
            firstName: '',
            lastName: '',
            company: '',
            subject: 'Interest From Website',
            message: ''
          }
      },
      methods: {
          clearForm () {
            this.firstName = ''
            this.lastName = ''
            this.company = ''
            this.subject = 'Interest From Website'
            this.message = ''
          },
          sendEmail () {
          },
          formatEmail () {
            return 'Name%3A%20' + this.firstName + '%20' + this.lastName + '%0D%0A' +
              'Company%3A%20' + this.company + '%0D%0A%0D%0A' + this.message
          },
          eventuallyClearForm () {
            let that = this
            setTimeout(() => that.clearForm(), 2500)
          }
      }
    }
</script>

<style scoped>
  .contact-page{
    width: 40%;
    margin: auto;
  }
  .contact-info{
    margin-top: 20px;
    border: black 3px solid;
    padding: 20px 0 50px 0;
  }
  .contact-header{
    margin: 0;
  }
  .form-label{
    float: left;
    width: 20%

  }
  .form-input{
    width: 70%;
  }
  .form-button{
    float: right;
    background-color: lightblue;
    width: 100px;
    height: 25px;
    margin: 15px 5px;
    border-radius: 3px;
    border: black 2px solid;
  }
  .email-link{
    float: right;
    position: center;
    background-color: lightblue;
    display: inline-block;
    width: 100px;
    height: 20px;
    font-size: 80%;
    text-decoration: none;
    color: black;
    border-radius: 3px;
    border: black 2px solid;
    margin: 15px 5px;
  }
  @media (max-width: 800px) {
    .contact-page{
      width: 90%;
    }
    .form-label{
      float: left;
      width: 30%;

    }
    .form-input {
      width: 50%;
    }
  }
</style>

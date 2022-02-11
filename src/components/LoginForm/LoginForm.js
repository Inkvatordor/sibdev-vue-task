import json from '@/assets/db.json'

export default {
  name: 'Login',
  data() {
    return {
      password_input: "",
      login_input: "",
      db: json
    }
  },
  methods: {
    submit_login(){
      if( this.db[this.login_input] == undefined ){
        console.log("not found")
      }else{
        if( this.db[this.login_input]["password"] == this.password_input ){
          
          const rand = () => {
            return Math.random().toString(36).substr(2);
          };
          const token = () => {
            return rand() + rand();
          };

          localStorage.setItem('token', token());
          console.log("Success! Token: " + localStorage.getItem('token'));
          this.$router.push('/');
        } else{
          console.log("password incorrect")
        }
      }
      
    }
  }
}
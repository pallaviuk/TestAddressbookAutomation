export default class DataGenrator {

    static generateEmail(){
        let values ='abcd1234'
        let email = ''
        let temp
        for (let i = 0; i < 10; i++){
            temp = values.charAt(Math.round(values.length * Math.random()))
            email += temp
        }
        temp = ''
        email += '@'
        for (let i = 0; i < 8; i++){
            temp = values.charAt(Math.round(values.length * Math.random()))
            email += temp
        }
        email += '.com'
        return email

    }
    


}
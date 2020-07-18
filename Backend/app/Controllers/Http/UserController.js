'use strict'
const User = use('App/Models/User');
const Hash = use('Hash')
class UserController {
    
    async login({ request, auth, session, response }) {
        const email = request.body.email
        const passwords = request.body.password
        console.log(request.body)
        const user = await User.query()
            .where('email', email)
            .first()
        if (null !== user) {
            
            if (passwords === user.password) {
              
                await auth.generate(user)
                response.send({
                    "messsage": "login successfully"
                })
            }
            else {
                response.send({
                    "messsage": "password is wrong."
                })
            }
        }
        else {
            response.send({
                "messsage": "Email is not register with us."
            })
        }
    }

    async showUser({ request, response }) {
        return await User.all()
    }
    async showUserById({ request, response, params: { id } }) {
        const user = await User.find(id)
        if (user) {
            response.send(user)
        }
        else {
            response.send({
                'message': 'user Id Not Found'
            })
        }
    }

    async addUser({ request, response }) {
        const data = request.all()
        const user = new User()
        user.username = data.username
        user.name = data.name
        user.email = data.email
        user.website = data.website
        user.phone = data.phone
        await user.save()
        response.send({
            'message': 'Add Successfully'
        })
    }
    async deleteUser({ request, response, params: { id } }) {
        const user = await User.find(id)
        if (user) {
            user.delete()
            response.send({
                'message': 'Delete user successfully'
            })
        }
        else {
            response.send({
                'message': 'user Id Not Found'
            })
        }
    }
    async updateUser({ request, response, params: { id } }) {
        const data = request.all()
        const user = await User.find(id)
        if (user) {
            user.username = data.username
            user.name = data.name
            user.email = data.email
            user.website = data.website
            user.phone = data.phone
            await user.save()
            response.send({
                'message': 'user update successfully'
            })
        }
        else {
            response.send({
                'message': 'user Id Not Found'
            })
        }
    }

}

module.exports = UserController

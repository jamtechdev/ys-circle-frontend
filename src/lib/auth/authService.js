// import axios from '../axios'

// export const authService = {
//     async login(email, password) {
//         const { data } = await axios.post('/login', { email, password })
//         return data
//     },

//     async register(name, email, password, password_confirmation) {
//         const { data } = await axios.post('/register', {
//             name,
//             email,
//             password,
//             password_confirmation
//         })
//         return data
//     },

//     async logout() {
//         await axios.post('/logout')
//     },

//     async getUser() {
//         const { data } = await axios.get('/user')
//         return data
//     },

//     async forgotPassword(email) {
//         const { data } = await axios.post('/forgot-password', { email })
//         return data
//     },

//     async resetPassword(email, password, password_confirmation, token) {
//         const { data } = await axios.post('/reset-password', {
//             email,
//             password,
//             password_confirmation,
//             token,
//         })
//         return data
//     },
// }



// Mock mode for testing (set to false when Laravel backend is ready)
const MOCK_MODE = true

const mockAuth = {
    async login(email, password) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        // Coordinator
        if (email === 'sarah@hospital.com' && password === 'password') {
            return {
                token: 'coord-token-123',
                user: { id: 1, name: 'Sarah', email, roles: ['coordinator'  ] }
            }
        }
        // Helper
        if (email === 'mike@example.com' && password === 'password') {
            return {
                token: 'help-token-456',
                user: { id: 2, name: 'Mike', email, roles: ['helper'] }
            }
        }
        // Recipient
        if (email === 'emily@example.com' && password === 'password') {
            return {
                token: 'recip-token-789',
                user: { id: 3, name: 'Emily', email, roles: ['recipient'] }
            }
        }
        // Multi-role user example
        if (email === 'multi@demo.com' && password === 'password') {
            return {
                token: 'multi-token-101',
                user: { id: 99, name: 'MultiUser', email, roles: ['helper', 'recipient'] }
            }
        }
        throw { response: { data: { message: 'Invalid credentials' } } }
    },

    async register(name, email, password, password_confirmation) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        // By default make registered user a recipient
        return {
            token: 'mock-token-new',
            user: { id: Math.floor(Math.random()*10000), name, email, roles: ['recipient'] }
        }
    },

    async logout() {
        await new Promise(resolve => setTimeout(resolve, 500))
    },

    async getUser() {
        await new Promise(resolve => setTimeout(resolve, 500))
        // Mock fetch for last logged-in user (simple example!)
        return { id: 1, name: 'Sarah', email: 'sarah@hospital.com', roles: ['coordinator'] }
    },
}

import axios from '../axios'

const realAuth = { /* no change, real API logic */ }

export const authService = MOCK_MODE ? mockAuth : realAuth

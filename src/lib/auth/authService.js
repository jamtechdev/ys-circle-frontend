import axios from '../axios'

export const authService = {
    async login(email, password) {
        const { data } = await axios.post('/login', { email, password })
        return data
    },

    async register(name, email, password, password_confirmation) {
        const { data } = await axios.post('/register', {
            name,
            email,
            password,
            password_confirmation
        })
        return data
    },

    async logout() {
        await axios.post('/logout')
    },

    async getUser() {
        const { data } = await axios.get('/user')
        return data
    },

    async forgotPassword(email) {
        const { data } = await axios.post('/forgot-password', { email })
        return data
    },

    async resetPassword(email, password, password_confirmation, token) {
        const { data } = await axios.post('/reset-password', {
            email,
            password,
            password_confirmation,
            token,
        })
        return data
    },
}



// Mock mode for testing (set to false when Laravel backend is ready)
// const MOCK_MODE = true

// const mockAuth = {
//     async login(email, password) {
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         if (email === 'test@test.com' && password === 'password') {
//             return {
//                 token: 'mock-token-123',
//                 user: { id: 1, name: 'Test User', email: 'test@test.com' }
//             }
//         }
//         throw { response: { data: { message: 'Invalid credentials' } } }
//     },

//     async register(name, email, password, password_confirmation) {
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         return {
//             token: 'mock-token-456',
//             user: { id: 2, name, email }
//         }
//     },

//     async logout() {
//         await new Promise(resolve => setTimeout(resolve, 500))
//     },

//     async getUser() {
//         await new Promise(resolve => setTimeout(resolve, 500))
//         return { id: 1, name: 'Test User', email: 'test@test.com' }
//     },
// }

// import axios from '../axios'

// const realAuth = {
//     async login(email, password) {
//         const { data } = await axios.post('/login', { email, password })
//         return data
//     },

//     async register(name, email, password, password_confirmation) {
//         const { data } = await axios.post('/register', { name, email, password, password_confirmation })
//         return data
//     },

//     async logout() {
//         await axios.post('/logout')
//     },

//     async getUser() {
//         const { data } = await axios.get('/user')
//         return data
//     },
// }

// export const authService = MOCK_MODE ? mockAuth : realAuth

import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://react-social.local/api/1.0',
  headers: {'API-KEY': '8f0a4b83-c9fd-4c73-ab88-0ce032fdf3fe1'}
})

export const usersAPI = {
  getUsers(currentPage= 1, pageSize= 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    try {
      instance.put(`profile/status`, {status}) 
    } catch (e) {
      debugger
    }
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile)
    return instance.put(
      `profile/photo`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}
// Search users
export const searchUsers = async (query) => {
  const params = new URLSearchParams({
    q: query,
  })
  const response = await fetch(`https://api.github.com/search/users?${params}`)

  const data = await response.json()

  return data.items
}

// Fetch a single user
export const fetchUser = async (login) => {
  const response = await fetch(`https://api.github.com/users/${login}`)

  if (response.status === 404) {
    window.location = "/notfound"
  } else {
    const data = await response.json()

    return data
  }
}

// get user repos
export const fetchRepos = async (userId) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  })
  const response = await fetch(
    `https://api.github.com/users/${userId}/repos?${params}`
  )
  const data = await response.json()

  return data
}

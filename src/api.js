export const fetcher = (path) => fetch(`https://api.github.com/${path}`)
                                    .then(r => r.json())
const LinksSocialMedia = {
  github: 'tawan-suplino',
  youtube: 'jakelinygracielly',
  facebook: 'tawan.suplino.e',
  instagram: 'tawansuplino',
  twitter: 'leomouradesg'
}
 /* Social Medida*/
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)/* O json e pares de chaves com chave e valor*/
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

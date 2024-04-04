
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/LucasAdao/Portifolio/main/data/pro';
    const response = await fetch(url);
    const profileData = await response.json();
    return profileData;
}

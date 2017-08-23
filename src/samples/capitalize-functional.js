const capitalize = word => word[0].toUpperCase() + word.substr(1)
const capitalizeWords = words => words.split(' ').map(cap).join(' ')

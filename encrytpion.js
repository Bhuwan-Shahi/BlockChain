const crypto = require('crypto')

const secretkey = crypto.randomBytes(16)
const iv = crypto.randomBytes(16)

const encrypt = (data, key, iv) =>{
    const cipher = crypto.createCipheriv('aes-128-cbc', key , iv)
    let encrypted = cipher.update(data, 'utf-8', 'hex')
    encrypted += cipher.final('hex')
    return encrypted;
}

const decrypt = (encryptedData, key, iv) => {
    const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv)
    let decrypted = decipher.update(encryptedData, 'hex', 'utf-8')
    decrypted += decipher.final('utf-8')
    return decrypted
}

const encrypteed = encrypt("eliza", secretkey, iv)
console.log(encrypteed)

const decrypteed = decrypt(encrypteed,secretkey,iv)
console.log(decrypteed)

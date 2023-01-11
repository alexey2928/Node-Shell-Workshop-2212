const echo = (str, done) => {
    const phrase = str.split(" ").splice(1).join(" ");
    done(phrase);
}

module.exports = echo;
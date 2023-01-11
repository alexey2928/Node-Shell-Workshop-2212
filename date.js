const date = (done) => {
    const time = new Date;
    done(time.toString());
}

module.exports = date
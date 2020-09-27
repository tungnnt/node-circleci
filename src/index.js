module.exports = {
    devide: (a,b)=>{
        if (b===0) throw new Error('Không thể chia cho 0.')
        return a/b
    }
}
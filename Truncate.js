function truncateSentence(s, k) {
    
    const words = s.split(' ');

    
    const truncatedWords = words.slice(0, k);

    
    return truncatedWords.join(' ');
}


const s = "Hello how are you Constant";
const k = 4;
const result = truncateSentence(s, k);
console.log(result);  

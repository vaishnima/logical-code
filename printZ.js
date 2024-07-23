function createZPattern(rows) {
    let pattern = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            if (i == 0 || i == rows - 1 || i + j == rows - 1) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        pattern += '\n';
    }
    return pattern;
}

const rows = 5; 
console.log(createZPattern(rows));

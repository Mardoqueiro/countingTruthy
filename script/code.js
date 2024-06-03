const elements = [0, null, undefined, '', 2, 3];
try {
    console.log(countTruthyElements(elements));
} catch (error) {
    console.error('Error:', error);
}

function countTruthyElements(elements) {
    if (!Array.isArray(elements)) {
        throw new TypeError('Argument must be an array');
    }
    let truthyCount = 0;

    for (const element of elements) {
        if (element) {
            truthyCount++;
        }
    }

    return truthyCount;
}
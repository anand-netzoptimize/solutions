const Arrays = () => {
  function ArrayChallenge(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let result = false;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] * arr[j] > sum * 2) {
          result = true;
          break;
        }
      }
    }

    return { result, sum };
  }

  // const arr = [2, 5, 6, -6, 16, 2, 3, 6, 5, 3]; // true
  const arr = [2, 2, 2, 2, 4, 1]; // false

  const { result, sum } = ArrayChallenge(arr);

  return (
    <div>
      <p>Provided Array: [{arr.join(", ")}]</p>
      <p>Sum of the Array: {sum * 2}</p>
      <p>Result: {result ? "True" : "False"}</p>
    </div>
  );
};

export default Arrays;

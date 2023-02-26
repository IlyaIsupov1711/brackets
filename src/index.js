module.exports = function check(str, bracketsConfig)
{

  let b_confing = bracketsConfig.reduce
  (
    (acc, value) =>
    {
      acc[value[0]] = value[1];
      acc[value[1]] = null;
      return acc;
    },
    {}
  );

  let stack = [];

  for (let i = 0; i < str.length; i++)
  {
    let char = str[i];
    if (b_confing[char] === null)
    {
      if (stack.pop() !== char)
      {
        return false;
      }
    }
    else if (b_confing[char] !== undefined)
    {
      stack.push(b_confing[char]);
    }
  }

  if (stack.length !== 0)
  {
    return false;
  }

  return true;
};
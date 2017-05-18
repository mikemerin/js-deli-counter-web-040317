var katzDeli = [];

function takeANumber(line, name) {
    line.push(name)
    return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0)
    return `Currently serving ${line.shift()}.`
  else
    return "There is nobody waiting to be served!"
}

function currentLine(line) {
  if (line.length > 0) {
    var names = []
    for ( let i = 0, l = line.length; i < l; i++ ) {
        names.push(`${i+1}. ${line[i]}`)
      }
    return `The line is currently: ${names.join(", ")}`
    }
  else
    return "The line is currently empty."
}

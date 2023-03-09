# Futures-Toolkit - Chrome-Extension
This is a JavaScript function that calculates the potential profit and risk of a trade based on the user input for return on equity (ROE), leverage, and margin.

Here's what each variable represents:

`winroe`: the expected return on equity for a winning trade, entered as a percentage
`riskroe`: the expected return on equity for a losing trade, entered as a percentage
`leverage`: the amount of leverage used for the trade, entered as a ratio (e.g., 1-125)
`margin`: the amount of margin used for the trade, entered as a percentage
The function then calculates the potential profit and risk of the trade based on these inputs.

pnl: the potential profit or loss, calculated by multiplying the expected return on equity for a winning trade by the amount of leverage used, and then multiplying that result by the amount of margin used
roe: the potential return on equity for the trade, calculated by multiplying the expected return on equity for a winning trade by the amount of leverage used
risk: the potential risk for the trade, calculated by multiplying the expected return on equity for a losing trade by the amount of leverage used (note the negative sign), and then multiplying that result by the amount of margin used
Finally, the function updates the text of three HTML elements on the page with the calculated values using innerText and toFixed() methods.

The function is attached to a click event listener on a "Calculate" button, so it will only run when the button is clicked.

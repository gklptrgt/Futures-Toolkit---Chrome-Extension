# Futures Toolkit - Chrome-Extension 🛠
I wanted to calculate my positions possible profit and loses in a fast way and came up with this idea.
This is a JavaScript function that calculates the potential profit and risk of a trade based on the user input for return on equity (ROE), leverage, and margin.

Here's what each variable represents:

 - `winroe`: the expected return on equity for a winning trade, entered as a percentage

 - `riskroe`: the expected return on equity for a losing trade, entered as a percentage

 - `leverage`: the amount of leverage used for the trade, entered as a ratio (e.g., 1-125)

 - `margin`: the amount of margin used for the trade, entered as a percentage.

The function then calculates the potential profit and risk of the trade based on these inputs.

`pnl`: the potential profit or loss, calculated by multiplying the expected return on equity for a winning trade by the amount of leverage used, and then multiplying that result by the amount of margin used.

`roe`: the potential return on equity for the trade, calculated by multiplying the expected return on equity for a winning trade by the amount of leverage used.

`risk`:the potential risk for the trade, calculated by multiplying the expected return on equity for a losing trade by the amount of leverage used (note the negative .
sign), and then multiplying that result by the amount of margin used.

Finally, the function updates the text of three HTML elements on the page with the calculated values using innerText and toFixed() methods.

The function is attached to a click event listener on a "Calculate" button, so it will only run when the button is clicked.

---
__This helps to calculate your possible profit with just the percentage of the profit__

![preview image](https://i.imgur.com/GfKlR3i.png)

---
### Use case:
![usecase](https://user-images.githubusercontent.com/62908937/224173616-635c8233-674c-4c8c-82f1-b64a3f995b3e.png)
In order to use it, you can enter your positions percentage of winning (the green area: 6.77%)  and percentage of losing (red area: 2.11%), leverage (the rate you are playing on the trading platform), your margin that you will use and at the bottom you can see possible wins and losses when it reaches certain price ranges.



_Trading online may seem like a fun and easy way to make money, but it's important to remember that it involves real risks and should be approached with caution. Don't let the excitement of the moment cloud your judgement - take the time to educate yourself and make informed decisions before investing your hard-earned money._


While the code I provided above can give you an idea of the potential profit and risk of a trade, it's important to be aware of the limitations of this tool and to take into account any fees or expenses that may be incurred in real-world trading scenarios. Always make sure to do your due diligence and research before making any investment decisions, and consider consulting with a financial professional if you're unsure about any aspects of trading or investing.


---
layout: ../../layouts/post.astro
title: Automate stock trading with Python
description: A detailed post to building my trading bot, Pug.
dateFormatted: Mar 2, 2025
---

# Stages of building my trading bot

<img src="/assets/images/pug.jpg" alt="mascot" width="200" />

## Stage 1: A timer bot

Initially, I wanted to build just one feature, a tool that can close out all trades at a specific time. I thought this was a somewhat useful feature to have not provided by many trading platforms.

I chose a very well-known platform, **Interactive broker** and did some quick research to find that it provided comprehensive and extensive packages for its [API](https://interactivebrokers.github.io/tws-api/index.html). This was great.

I implemented `ib-insync` python lib to accelerate my development process. It's a useful library containing most functions you would need to build a trading bot.

In the beginning, my simple feature looked something like this.

```python
from ib_insync import MarketOrder

from my_module.logger import Logger
from my_module.order import place_order

logger = Logger.get_logger(__name__)


async def close_all_positions(ib):
    """
    Closes all active positions.
    """
    try:
        logger.info("Cancelling all outstanding orders...")
        ib.reqGlobalCancel()

        for pos in ib.positions():
            contract = pos.contract
            contract.exchange = "SMART"
            action = "SELL" if pos.position > 0 else "BUY"
            trade = place_order(ib, contract, action, "MARKET", abs(pos.position))
            while not trade.isDone():
                await asyncio.sleep(1)
            logger.info(
                f"Position for {contract.localSymbol} with {abs(pos.position)} shares closed."
            )

        ib.disconnect()
    except Exception as e:
        logger.error(f"Error during position closure: {e}")

```

## Stage 2: Generate daily reports

The next useful feature I came up with was **generating reports**.

Traders that trade intraday market generally want to have some kind of graphical representation to visualize their trades throughout the day.

Waterfall graph was on the top of my list.

I finished this part mostly with the help of ChatGPT and Claude as I was still trying to get familiar with Python.

To sum it up, here's how it logically works.

1. Fetch all trades with `ib.trades()`
2. If trades have been `filled`, append it to a list.
3. Then export it excel using `df.to_excel()`
4. Then using the same data, create chart using `plotly` and `jinja2` to put it on HTML.

This produce a simple UI with:

- A table that list all the trades filled today.
- A waterfall chart with that represents realized PnL for each trade.
  <img src="/assets/images/posts/ibkr-automation-1.png" />

## Stage 3: Create trading algorithm with alerts via Discord

For my third feature, I wanted to create a bot that would monitor contracts designated by user and notify them.

I wanted to take this a step further than your average **price alert** that any platform can provide.

My bot would be notifying traders for potential **trade setups**.

### Technical steps

#### Discord

I chose the official lib `discord.py` built by Discord team to achieve this.

Setup was quite simple.

```python
import discord

TOKEN = os.getenv("DISCORD_TOKEN")
CHANNEL_ID = int(os.getenv("DISCORD_CHANNEL_ID"))

intents = discord.Intents.default()
intents.message_content = True
bot = discord.Client(intents=intents)

@bot.event
async def on_ready():
    logger.info(f"{bot.user} has connected to Discord!")
    await bot.get_channel(CHANNEL_ID).send("Bot is ready!")
```

Next, I used its `on_message()` method to receive prompts from my discord channel where I could perform tasks like checking **current opened positions** and **executing trade orders**.

Upon starting my `discord.py` file, it would also run `trading_app.py` file which contains the algorithm that would monitor trades.

#### Reversal Algorithm

The algo was a simple one with several conditions including:

1. Identify if contract is trending in a direction based on high of day, low of day, relative strength index(RSI), and volume weighted moving average (VWAP).
2. If RSI drops below 30 and price closed below VWAP lower band, notify to buy.
3. If RSI reaches above 70 and price closed above VWAP upper band, notify to short.
4. Place profit target at `X`.
5. Place stop above/below entry at 50% range of profit target.

#### Trade alert and chart

Upon trigger, algo will use `send_message` to send a notification to Discord.
<img src="/assets/images/posts/ibkr-automation-2.png" />

## Stage 4: Automate trading execution

## Stage 5: To be continued

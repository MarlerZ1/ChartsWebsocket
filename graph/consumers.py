import json
from asyncio import sleep
from random import randint

from channels.generic.websocket import AsyncWebsocketConsumer


class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        for i in range(1000):
            num = randint(1, 100)
            await self.send(json.dumps({"value": num}))
            await sleep(1)

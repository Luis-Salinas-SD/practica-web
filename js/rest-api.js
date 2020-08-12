var contenido = document.querySelector('#contenido');
function mostrar() {
    fetch('https://developers.syscom.mx/api/v1/categorias',
        headers = {
            'Authorization': 'Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE2MGE5M2VkNWUxYjBmMTkzYzM3NDE5NjczYjI2OTkwMmZmZjY4ZDZlOTIzOTEyNjcyYjU1NmU0Y2JmMTIwNDZhYWZjMGIyYWZiYjVjMjZmIn0.eyJhdWQiOiJQMDlSaFdGQVAwM2U5YkNYNUgxWU1KZ3FWalZKOUhDdSIsImp0aSI6ImE2MGE5M2VkNWUxYjBmMTkzYzM3NDE5NjczYjI2OTkwMmZmZjY4ZDZlOTIzOTEyNjcyYjU1NmU0Y2JmMTIwNDZhYWZjMGIyYWZiYjVjMjZmIiwiaWF0IjoxNTk1ODkwNzk1LCJuYmYiOjE1OTU4OTA3OTUsImV4cCI6MTYyNzQyNjc5NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.s8Us31jmZ67NmHKz4vrxwtf709SLqBV7CoXrR7v1Ks5purHnABE1hRoWdhb3a82WsOS24QoNfw0n1cqJXklhnA6xqsm7vJT6qU8kj7VMw6G3pHvJ50RrvyNVTFVFas_DZmppc6IQJEuR-fd2vFkyXQ1LOy1nVzXuT97y7f2VVJhnqCCfVjtEDeQX8Xq1EW4tuFpaO8Tl0y7dVnaVWxhO1zDGhjKUXjaZD0tBEcjMDnE4jm6ZAWj3bHk_kjIfcLHGdcJ7BFQDGzcQhfSwptUJrFsSaMdVma8gZjJMAVoQADdqqcFPfWUV6fZc5_8Q-5nXjbn373KWk1XPpLfsYFQlyOWpTaZud9gUthjrhftPUslLl_11oe_jjCHQqbZJ--sNM5RkZZm5lPq1VogcDV3Xsjf6zxcAZN01Cz539hY0-r8jArap93uB_135tz-zZUtmf-zwD1fQNIkzyVoAly9iV5CSNGXozD6ybj-_RGs7g6-FdoK-gSk7j4kvWaVQGN_TTxfhP_if8gj6L9L_9JS9wRgv9f7TC_RFBzfiW2Aqpw71wFR-FzUP80F52ybtFUnG0-91-yigtxv9vAQVy4D5oeenIwnFM-wBE-gCOiFpuyzwaA8VcCgVconxif3dVKZU9JhzzHN2zswR5HzEcEbg807IwSiX0o-Dk1OIoTbz2pQ',
        },
    )
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
}










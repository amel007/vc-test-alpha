const VCStorageContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setType",
                "inputs": [
                    {
                        "name": "Type",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setSize",
                "inputs": [
                    {
                        "name": "size",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setValue",
                "inputs": [
                    {
                        "name": "number",
                        "type": "uint8"
                    },
                    {
                        "name": "value",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "destruct",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "Type",
                        "type": "string"
                    },
                    {
                        "name": "size",
                        "type": "uint8"
                    },
                    {
                        "name": "value",
                        "type": "map(uint8,bytes)"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_type",
                "type": "string"
            },
            {
                "name": "_size",
                "type": "uint8"
            },
            {
                "name": "_value",
                "type": "map(uint8,bytes)"
            }
        ]
    },
    tvc: "te6ccgECIQEABBkAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUgBAQkiu1TIOMDIMD/4wIgwP7jAvILHQYFHwLm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfA0HA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBwcBwIoIIIQTNX5QbvjAiCCEGi1Xz+74wIRCAIoIIIQUpKfrrrjAiCCEGi1Xz+64wIPCQT8MPhCbuMA+Ebyc9H4QYjIz44rbNbMzsnbPCBu8tBkIG7yf9D6QDAgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy0GRopv5gghAL68IAvvLgZIIQBfXhAHD7AiD4a8jPhYjOgG/PQMmBAID7ANs8f/hnDSAKGQIY0CCLOK2zWMcFioriCwwBCtdN0Ns8DABC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBio6A4hsOAaRw7UTQ9AVxIYBA9A6T1wv/kXDi+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a4j4bHD4bW34boBA9A7yvdcL//hicPhjHwMsMPhG8uBM+EJu4wDTB9TR2zzbPH/4ZxsQGQBC+En4S8cF8uBkAfhOePQX+G74ScjPhYjOgG/PQMmAQPsABFAgghAiriE+uuMCIIIQMO/+S7rjAiCCEEfGLdq64wIgghBM1flBuuMCGBYUEgMqMPhG8uBM+EJu4wDTB9HbPNs8f/hnGxMZADb4SfhLxwXy4GT4bfhJyM+FiM6Ab89AyYBA+wADJjD4RvLgTPhCbuMA0ds82zx/+GcbFRkANPhJ+EvHBfLgZPhJyM+FCM6Ab89AyYEAoPsAAygw+Eby4Ez4Qm7jANTR2zzbPH/4ZxsXGQA2+En4S8cF8uBk+Gz4ScjPhYjOgG/PQMmAQPsAA3gw+Eby4Ez4Qm7jANHbPCOOIiXQ0wH6QDAxyM+HIM6AYs9AXhHPkoq4hPrMywf0AMlw+wCSXwPi4wB/+GcbGhkASPhO+E34TPhL+Er4Q/hCyMv/yz/Pg8v/VTDIzszLB/QAzcntVAAe+En4S8cF8uBk+Ez4TfhOAErtRNDT/9M/0wAx0//U0dD6QNTTB/QE0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEfHgAUc29sIDAuNDkuMAAAAAwg+GHtHtk=",
    code: "te6ccgECHgEAA+wAAgaK2zUdAQQkiu1TIOMDIMD/4wIgwP7jAvILGgMCHALm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAoEA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBkZBAIoIIIQTNX5QbvjAiCCEGi1Xz+74wIOBQIoIIIQUpKfrrrjAiCCEGi1Xz+64wIMBgT8MPhCbuMA+Ebyc9H4QYjIz44rbNbMzsnbPCBu8tBkIG7yf9D6QDAgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy0GRopv5gghAL68IAvvLgZIIQBfXhAHD7AiD4a8jPhYjOgG/PQMmBAID7ANs8f/hnCh0HFgIY0CCLOK2zWMcFioriCAkBCtdN0Ns8CQBC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBio6A4hgLAaRw7UTQ9AVxIYBA9A6T1wv/kXDi+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a4j4bHD4bW34boBA9A7yvdcL//hicPhjHAMsMPhG8uBM+EJu4wDTB9TR2zzbPH/4ZxgNFgBC+En4S8cF8uBkAfhOePQX+G74ScjPhYjOgG/PQMmAQPsABFAgghAiriE+uuMCIIIQMO/+S7rjAiCCEEfGLdq64wIgghBM1flBuuMCFRMRDwMqMPhG8uBM+EJu4wDTB9HbPNs8f/hnGBAWADb4SfhLxwXy4GT4bfhJyM+FiM6Ab89AyYBA+wADJjD4RvLgTPhCbuMA0ds82zx/+GcYEhYANPhJ+EvHBfLgZPhJyM+FCM6Ab89AyYEAoPsAAygw+Eby4Ez4Qm7jANTR2zzbPH/4ZxgUFgA2+En4S8cF8uBk+Gz4ScjPhYjOgG/PQMmAQPsAA3gw+Eby4Ez4Qm7jANHbPCOOIiXQ0wH6QDAxyM+HIM6AYs9AXhHPkoq4hPrMywf0AMlw+wCSXwPi4wB/+GcYFxYASPhO+E34TPhL+Er4Q/hCyMv/yz/Pg8v/VTDIzszLB/QAzcntVAAe+En4S8cF8uBk+Ez4TfhOAErtRNDT/9M/0wAx0//U0dD6QNTTB/QE0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEcGwAUc29sIDAuNDkuMAAAAAwg+GHtHtk=",
    codeHash: "d85a985630c8062d1b14fa69cf2679963ae20767ef8ca0a393ee651b6407f79f",
};
module.exports = { VCStorageContract };

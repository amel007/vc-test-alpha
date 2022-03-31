const VCRootStorageContract = {
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
                "inputs": [
                    {
                        "name": "codeVC",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createStorageVC",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "resolveCodeHashVC",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveVC",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrVC",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
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
                "name": "_codeVC",
                "type": "cell"
            },
            {
                "name": "_id",
                "type": "uint256"
            }
        ]
    },
    tvc: "te6ccgECHgEAA9MAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsbBQQdAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8FwYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8GhoGBFAgghAciukbuuMCIIIQJAzKELrjAiCCEDupVXG64wIgghB5U+bEuuMCFQsJBwOUMPhG8uBM+EJu4wD6QZXU0dD6QN/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAPlT5sSM8Wy//JcPsAkTDi4wB/+GcZCBYBCNs8+QAPA5Yw+Eby4Ez4Qm7jAPpBldTR0PpA39cN/5XU0dDT/9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5LupVXGzs3JcPsAkTDi4wB/+GcZChYCcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjbPFjbPPkAcMjPhkDKB8v/ydAxDw4DJjD4RvLgTPhCbuMA0ds82zx/+GcZDBYD/vhJjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy0GRopv5gghAX14QAvvLgZPhJ2zz4S9s8IPkAyM+KAEDL/8jPhYjPE40EkEeGjAAAAAAAAAAAAAAAAAABwM8WzM+Q0Wq+f8lw+wD4S6T4a/hJyM+FiM4PDg0AEoBvz0DJgED7AABKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQESyM74StAByds8EAIWIYs4rbNYxwWKiuISEQEIAds8yRMBJgHU1DAS0Ns8yM+OK2zWEszPEckTAWbViy9KQNcm9ATTCTEg10qR1I6A4osvShjXJjAByM+L0pD0AIAgzwsJz4vShswSzMjPEc4UAQSIAR0CKjD4Qm7jAPhG8nPU0fgA+GrbPH/4ZxcWACr4S/hK+EP4QsjL/8s/z4PMy//J7VQCFu1E0NdJwgGKjoDiGRgBOnDtRND0BYj4anD4a4BA9A7yvdcL//hicPhjcPhrHQAs7UTQ0//TP9MAMdTT/9H4a/hq+GP4YgAK+Eby4EwCCvSkIPShHRwAFHNvbCAwLjQ5LjAAAA==",
    code: "te6ccgECGwEAA6YABCSK7VMg4wMgwP/jAiDA/uMC8gsYAgEaAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8FAMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FxcDBFAgghAciukbuuMCIIIQJAzKELrjAiCCEDupVXG64wIgghB5U+bEuuMCEggGBAOUMPhG8uBM+EJu4wD6QZXU0dD6QN/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAPlT5sSM8Wy//JcPsAkTDi4wB/+GcWBRMBCNs8+QAMA5Yw+Eby4Ez4Qm7jAPpBldTR0PpA39cN/5XU0dDT/9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5LupVXGzs3JcPsAkTDi4wB/+GcWBxMCcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjbPFjbPPkAcMjPhkDKB8v/ydAxDAsDJjD4RvLgTPhCbuMA0ds82zx/+GcWCRMD/vhJjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy0GRopv5gghAX14QAvvLgZPhJ2zz4S9s8IPkAyM+KAEDL/8jPhYjPE40EkEeGjAAAAAAAAAAAAAAAAAABwM8WzM+Q0Wq+f8lw+wD4S6T4a/hJyM+FiM4MCwoAEoBvz0DJgED7AABKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQESyM74StAByds8DQIWIYs4rbNYxwWKiuIPDgEIAds8yRABJgHU1DAS0Ns8yM+OK2zWEszPEckQAWbViy9KQNcm9ATTCTEg10qR1I6A4osvShjXJjAByM+L0pD0AIAgzwsJz4vShswSzMjPEc4RAQSIARoCKjD4Qm7jAPhG8nPU0fgA+GrbPH/4ZxQTACr4S/hK+EP4QsjL/8s/z4PMy//J7VQCFu1E0NdJwgGKjoDiFhUBOnDtRND0BYj4anD4a4BA9A7yvdcL//hicPhjcPhrGgAs7UTQ0//TP9MAMdTT/9H4a/hq+GP4YgAK+Eby4EwCCvSkIPShGhkAFHNvbCAwLjQ5LjAAAA==",
    codeHash: "b0b97b0ee87dd3f8361364fa15f5d5b2a48de27b770be07d4973da1859406d50",
};
module.exports = { VCRootStorageContract };

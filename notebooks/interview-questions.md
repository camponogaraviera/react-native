<div align='center'>
  <h1> Interview Preparation </h1>
  <h1> Questions </h1>
</div>

1\. A client wants to add fast on-device LLM inference using LiteRT-LM to an existing React Native application. Does he need to rewrite the entire application in Kotlin to achieve high performance?
  - **Answer**: No. The important requirement is that LLM inference is delegated to the native LiteRT-LM runtime rather than implemented in JavaScript. A React Native native module can bridge the JavaScript layer to LiteRT-LM, while LiteRT-LM performs the computationally intensive inference using the device's CPU, GPU, or NPU.
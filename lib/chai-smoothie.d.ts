interface Eventually {
    displayed: PromisedAssertion;
    present: PromisedAssertion;
    enabled: PromisedAssertion;
    selected: PromisedAssertion;
    text(text: string): PromisedAssertion;
}
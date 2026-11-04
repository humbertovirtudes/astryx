# Row-specific expansion names

*TL;DR The detail-panel and tree source stories retain identical light/dark pixels while expand/collapse buttons gain row-specific accessible names. The implementation is proposed, not merged; computed browser names are not a spoken screen-reader certification.*

- Base: `ccfadbef8225423ecf6f16ba479a3c7775f3991a`.
- Runtime source: `4d8f0878cfdd3dcad4b9b371858f36b9008db887`; final code `bef8df211f2a3b1b94e68845f917d3029b7d2c75` changes only the generated API report from that source.
- Both light/dark before-after PNG pairs are byte-identical.
- `row-names-demo.webm` is a Chromium recording of native keyboard and control interactions, encoded VP9/tv. Startup blank frames are retained rather than described as interaction evidence.
- Source-story verification covers names, expanded state, focus, Table-only locale providers and generic context-menu copy. It does not claim a hosted Storybook deployment, production authentication or spoken AT.

This evidence-only branch is separate from implementation and contains no build/runtime source or private operational data. The proposed specification is https://github.com/meta/astryx/pull/9859; implementation is https://github.com/meta/astryx/pull/6776.

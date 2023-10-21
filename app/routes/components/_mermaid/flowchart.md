
```mermaid
flowchart TD

	Page.History　-->　Stop

	Page.Edit-->　Stop

リクエスト

	Start --> Stop
	subgraph on
	Start --> |text|PointA
	end
	PointA --- Stop



```

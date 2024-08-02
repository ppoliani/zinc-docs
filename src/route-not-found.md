---
title: "JsonResponse"
draft: false
weight: 5
---

## JSON Response.

1. Use catcher to capture specific status codes and execute handler method.
```
var catchers = zinc.getCatchers();
try catchers.put(.not_found, notFound);
```

1. Complete code.
```zig
const z = @import("zinc");

pub fn main() !void {
    var zinc = try z.Engine.init(.{ .port = 8080 });

    var catchers = zinc.getCatchers();
    try catchers.put(.not_found, notFound);

    try zinc.run();
}

fn notFound(ctx: *z.Context, _: *z.Request, _: *z.Response) anyerror!void {
    try ctx.HTML(.{
        .status = .not_found,
    }, "<h1>404 Not Found</h1>");
}

```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).


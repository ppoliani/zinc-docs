---
title: "JsonResponse"
draft: false
weight: 5
---

## JSON Response.

1. Use catcher to capture specific status codes and execute handler method.
```
var catchers = z.getCatchers();
try catchers.put(.not_found, notFound);
```

2. Complete code.
```zig
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });

    var catchers = z.getCatchers();
    try catchers.put(.not_found, notFound);

    try z.run();
}

fn notFound(ctx: *zinc.Context, _: *zinc.Request, _: *zinc.Response) anyerror!void {
    try ctx.HTML(.{
        .status = .not_found,
    }, "<h1>404 Not Found</h1>");
}

```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).


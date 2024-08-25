---
title: "Query parameters"
draft: false
weight: 5
---

## Query parameters.
```zig
GET /query?id=1234&message=hello&message=world HTTP/1.1
```

1. Complete code.
```zig
const std = @import("std");
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });

    var router = z.getRouter();
    try router.get("/query", queryParamters);

    try z.run();
}

fn queryParamters(ctx: *zinc.Context) anyerror!void {
    const id = try ctx.queryString("id");
    const messages: std.ArrayList([]const u8) = try ctx.queryValues("message");

    const bf = try std.fmt.allocPrint(std.heap.page_allocator, "id: {s}\nmessages: {s} {s}", .{ id, messages.items[0], messages.items[1] });

    try ctx.text(bf, .{});
}

```
response:
```
id: 1234
messages: hello world
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples/tree/main/examples/serving-static-files).


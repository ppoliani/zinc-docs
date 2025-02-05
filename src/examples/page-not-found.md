---
title: "Page not found"
draft: false
weight: 5
---

## Page not found.

1. Use catcher to capture specific status codes and execute handler method.
```zig
var catchers = z.getCatchers();
try catchers.put(.not_found, notFound);
```

2. Complete code.
```zig
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });
    defer z.deinit();

    var catchers = z.getCatchers();
    try catchers.put(.not_found, notFound);

    try z.run();
}

fn notFound(ctx: *zinc.Context) anyerror!void {
    try ctx.html("<h1>404 Not Found</h1>", .{
        .status = .not_found,
    });
}

```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).


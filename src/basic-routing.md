---
title: "BasicRouting"
draft: false
weight: 3
---

## Example.

1. Import it in your code:
```zig
const z = @import("zinc");
```

2. Create a handle function for http request.
```zig
fn hello(_: *z.Context, _: *z.Request, res: *z.Response) anyerror!void {
    std.debug.print("Hello!\n", .{});
    try res.send("Hello!");
}
```

3. Add handle function to router.
```zig
var router = &engine.router;
try router.get("/hello", hello);
```

4. Very simple and complete code sample
```zig
const std = @import("std");
const z = @import("zinc");

pub fn main() !void {
    var engine = try z.Engine.new(8080);
    std.debug.print("Listening on: 127.0.0.1:{any}\n", .{engine.getPort()});

    var router = &engine.router;
    try router.get("/hello", hello);

    try engine.run();
}

fn hello(_: *z.Context, _: *z.Request, res: *z.Response) anyerror!void {
    std.debug.print("Hello!\n", .{});
    try res.send("Hello!");
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).


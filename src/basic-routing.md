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
    try res.send("Hello!");
}
```

3. Create an zinc engine, and add handle function to router.
```zig
var engine = try z.Engine.new(8080);

var router = &engine.router;
try router.get("/hello", hello);
```

3. Complete code.
```zig
const z = @import("zinc");

pub fn main() !void {
    var engine = try z.Engine.new(8080);

    var router = &engine.router;
    try router.get("/hello", hello);

    try engine.run();
}

fn hello(_: *z.Context, _: *z.Request, res: *z.Response) anyerror!void {
    try res.send("Hello!");
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).


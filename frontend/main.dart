import 'package:flutter/material.dart';

void main() {
  runApp(HurryUpApp());
}

class HurryUpApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('HurryUp - Fresh Vegetables')),
      body: Center(child: Text('Welcome to HurryUp!')),
    );
  }
}
